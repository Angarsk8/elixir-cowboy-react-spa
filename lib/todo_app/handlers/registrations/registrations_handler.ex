defmodule TodoApp.RegistrationsHandler do
  alias TodoApp.{User, Entities, Authorization}

  use Entities.BaseHandler

  import TodoApp.RegistrationView, only: [render: 2]
  import Authorization.Helpers, only: [encode_and_sign: 1]

  # REST Handlers Overrides (TodoApp.Entities.BaseHandler)

  def allowed_methods(req, state) do
    {["OPTIONS", "POST"], req, state}
  end

  # REST Handlers

  def handle_post(req, _state) do
    user = Repo.insert!(%User{})
    jwt = encode_and_sign(user)

    req
    |> set_body(render(:show, jwt: jwt, user: user))
    |> reply(200)
  end
end
