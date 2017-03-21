defmodule TodoApp.Entities.BaseHandler do
  defmacro __using__(_opts) do
    quote do
      alias TodoApp.Repo
      import Ecto
      import Ecto.Query
      import unquote(__MODULE__)

      # Default REST Callbacks

      def init(req, opts) do
        {:cowboy_rest, req, opts}
      end

      def content_types_provided(req, state) do
        {[{"application/json", :handle_get}], req, state}
      end

      def content_types_accepted(req, state) do
        {[{"application/json", :handle_post}], req, state}
      end

      def allowed_methods(req, state) do
        {["GET", "POST"], req, state}
      end
    end
  end

  # Helper Functions

  def set_body(req, body) do
    body = Poison.encode!(body)
    :cowboy_req.set_resp_body(body, req)
  end

  def set_header(req, key, value) do
    :cowboy_req.set_resp_header(key, value, req)
  end

  def set_headers(req, headers \\ %{}) do
    :cowboy_req.set_resp_headers(headers, req)
  end

  def reply(req, status_code, result \\ :ok, state \\ :no_state) do
    req = :cowboy_req.reply(status_code, req)
    {result, req, state}
  end
end
