defmodule TodoApp.CurrentUserHandler do
  alias TodoApp.{Entity, Authorization}

  use Entity.BaseHandler
  use Authorization.BaseHandler

  import TodoApp.UserView, only: [render: 2]

  # REST Handlers Overrides (TodoApp.Entity.BaseHandler)

  def allowed_methods(req, state) do
    {["GET", "OPTIONS"], req, state}
  end

  # REST Handlers

  def index(req, user, _params) do
    req
    |> set_body(render(:show, user: user))
    |> reply(200)
  end
end
