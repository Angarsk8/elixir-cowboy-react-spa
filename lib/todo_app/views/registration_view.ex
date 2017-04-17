defmodule TodoApp.RegistrationView do
  use TodoApp.BaseView

  def render(:show, %{jwt: jwt, user: user}) do
    %{
      data: %{
        jwt: jwt,
        user: TodoApp.UserView.render(:user, user: user)
      }
    }
  end
end
