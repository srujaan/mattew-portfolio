---
type: "post"
slug: "building-a-basic-http-server-with-elixir-p2"
date: 2018-12-28
title: "Building a Basic HTTP Server with Elixir and OTP - Part 2"
description: "Part 2 - Plug, Cowboy and HTTP."
---

If you haven't read Part 1 yet, go read it [here](http://www.matthewsecrist.net//building-a-basic-http-server-with-elixir-p1/)

You can view the full implementation [here](https://github.com/matthewsecrist/TodoOTP-HTTP)

In the first part of our tutorial, we built a simple GenServer that can add, toggle, remove and list Todos. Now, we'll wire it up to an HTTP server driven by `Plug` and `Cowboy`. Lets go back to our app and in `mix.exs` we are going to add

> mix.exs

```elixir
defp  deps  do
	[
		{:cowboy,  "~> 2.6"},
		{:plug_cowboy,  "~> 2.0"},
		{:plug,  "~> 1.7"}
	]
end
```

and make sure to start them up with the app.

> mix.exs

```elixir
def  application  do
	[
		extra_applications:  [:logger,  :cowboy,  :plug],
		mod:  {Todo.Application,  []}
	]
end
```

If you're not familiar with [Plug](https://hexdocs.pm/plug/readme.html) or [Cowboy](https://ninenines.eu/docs/en/cowboy/2.6/guide/), you can check them out at those links.

Open up a terminal window and run `mix deps.get` to download the new dependencies. Then we'll update our supervision tree.

> lib/todo/application.ex

```elixir
...
require  Logger

def  start(_type,  _args) do
	children =  [
		{Plug.Cowboy,  scheme:  :http,  plug:  Todo.Router,  options:  [port:  3000]},
		{Todo.Server,  [name:  Todo.Server]}
	]

Logger.info("Starting application on port 3000.")
...
```

And then we need to make our router. Go ahead and create `lib/todo/router.ex`

> lib/todo/router.ex

```elixir
defmodule Todo.Router do
	use  Plug.Router

	plug(Plug.Logger)
	plug(:match)
	plug(:dispatch)

	get "/" do
		send_resp(conn, 200, "Hello, world!")
	end

	match(_, do: send_resp(conn, 404, "This is not the page you are looking for")
end
```

That gets us a basic starter to test out our server. We can then `iex -S mix` and then visit `http://localhost:3000`. You should be presented with a page that says `Hello, world!`. If you go to `http://localhost:3000/thisshouldnotexist` we'll see `This is not the page you are looking for`. That means that everything is playing nicely!

Lets make sure we can serve an HTML file. Create a new file at `/lib/todo/template.html.eex`

> lib/todo/template.html.eex

```html
<!DOCTYPE html>
<html>
  <head>
    <title>OTP Todo App</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="/static/todo.css" />
  </head>
  <body>
    <h1>Todo</h1>
  </body>
</html>
```

> priv/static/todo.css

```css
body {
  background: #dddddd;
  color: #333333;
}
```

And create the .css file and put it into `priv/static/todo.css`. Its important that the file goes into that folder because we can tell plug to serve our static assets from there as shown below.

Update `lib/todo/router.ex` ...

> router.ex

```elixir
defmodule  Todo.Router  do
	use  Plug.Router
	require  EEx

	alias Todo.Server

	@template "lib/todo/template.html.eex"

	plug(Plug.Static,  from:  :todo,  at:  "/static")
	plug(Plug.Logger)
	plug(:match)
	plug(:dispatch)

	get "/"  do
		response =  EEx.eval_file(@template)
		send_resp(conn,  200, response)
	end
...
```

I added the `alias Todo.Server` here because we'll need that later, but it won't serve any purpose right now. The `plug(Plug.Static, from: :todo, at: "/static")` portion is the important part for the CSS, so that Plug knows that anything served from `localhost:3000/static` is served from that folder.

Now, restart your server. Visiting `http://localhost:3000` now should show you a nice HTML Page with a gray background and the word "Todo".

Next up, wiring up the GenServer!

Back in `lib/todo/router.ex`, we'll modify our `get "/"` function

> router.ex

```elixir
get "/"  do
	todos =  Server.list()
	response =  EEx.eval_file(@template,  todos: todos)
	send_resp(conn,  200, response)
end
```

And in our template, under the `<h1>Todo</h1>` we'll add

> template.html.eex

```
<ul>
	<%=  for todo <- todos do  %>
		<li><%= todo.name %>  </li>
	<%  end  %>
</ul>
```

Restart the server again, refresh `http://localhost:3000` and... not much changed. Well, we don't have any todos. Back in your terminal, hit `enter` and you'll be able to type in the REPL. Lets do `Todo.Server.add("Hello, world!")` and refresh the page again.

You should now see your Todo on the page!

Moving on, we need a way to add Todos from the page. We need to add a form that posts to "/" and the server needs to re-serve the page with the updated Todos.

Lets add the form first.

> template.html.eex

```html
<form method="POST">
  <input
    type="text"
    id="new-item"
    name="item"
    pattern=".{3,}"
    required
    aria-label="Write a new todo item"
    title="3 characters minimum"
  />

  <input type="submit" value="Add new item" id="add-new-item" />
</form>
```

And then in router, we'll add a `post "/"` and a few helper functions to reduce code duplication.

> router.ex

```elixir
post "/"  do
	response =
		read_input(conn)
		|>  String.replace("+",  "  ")
		|>  Server.add()
		|> build_response

	send_resp(conn,  200, response)
end
...
# Private
defp  read_input(conn) do
	{:ok, body,  _conn}  = read_body(conn)
	"item="  <> item = body
	item
end

defp  build_response(todos) do
	EEx.eval_file(@template,  todos: todos)
end
```

When adding a Todo item, it will come in the form of "item=this+is+a+todo+item", so doing `"item=" <> item = body` lets us grab just the item. After that, we have to replace the `+` and put in a space instead.

Restarting the server and refreshing the page again should show us our new form and we can now add a todo to the list and see it on the page!

Now that we've got the basics, we'll quickly add the rest in. In our `template.html.eex`

> template.html.eex

```elixir
<ul>
	<%=  for todo <- todos do  %>
		<li  class="item">
		<%=  if todo.done do  %>
				<span  class="todo-item"><s><%= todo.name %></s></span>
				<form  method="POST"  action="toggle">
				<input  type="hidden"  name="item"  value="<%= todo.id %>">
				<input  class="incomplete"  type="submit"  value="Not Done"  />
			</form>
				<form  method="POST"  action="delete">
				<input  type="hidden"  name="item"  value="<%= todo.id %>">
				<input  class="delete"  type="submit"  value="Remove"  />
			</form>
		<%  else  %>
			<span  class="todo-item"><%= todo.name %></span>
			<form  method="POST"  action="toggle">
				<input  type="hidden"  name="item"  value="<%= todo.id %>">
				<input  class="incomplete"  type="submit"  value="Done"  />
			</form>
			<form  method="POST"  action="delete">
				<input  type="hidden"  name="item"  value="<%= todo.id %>">
				<input  class="delete"  type="submit"  value="Remove"  />
			</form>
		<%  end  %>
		</li>
	<%  end  %>
</ul>
```

And then in our `router.ex` file...

```elixir
post "/toggle"  do
	response =
		read_input(conn)
		|>  Server.toggle()
		|> build_response

	send_resp(conn,  200, response)
end

post "delete"  do
	response =
		read_input(conn)
		|>  Server.remove()
		|> build_response

	send_resp(conn,  200, response)
end
```

And finally, we'll restart the server again and now you should be able to add a todo, mark it as complete and delete it successfully. I'm not going to go over the styling in this post, because obviously, its out of scope of what I'm showing here.

Just to recap, we now have an HTTP server that will display an HTML Page that is backed by the state provided by our GenServer without the extras that Phoenix would provide us. Again, this is NOT meant as a replacement to Phoenix, and personally, I would recommend using that, but this is a great way to learn how Plug and Cowboy work.

As always, if you have any questions or comments, let me know by sending me a [tweet](https://twitter.com/_mattsecrist)!
