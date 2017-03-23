defmodule TodoApp.Entities.BaseHandler do
  defmacro __using__(_opts) do
    quote do
      alias TodoApp.Repo
      import Ecto
      import Ecto.Query
      import TodoApp.Handler.Helpers

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
        {["GET", "OPTIONS", "POST"], req, state}
      end

      def options(req, state) do
        req = set_headers(req, default_headers)
        {:ok, req, state}
      end
    end
  end
end

defmodule TodoApp.Entity.BaseHandler do
  defmacro __using__(_opts) do
    quote do
      alias TodoApp.Repo
      import Ecto
      import Ecto.Query
      import TodoApp.Handler.Helpers

      # Default REST Callbacks

      def init(req, opts) do
        {:cowboy_rest, req, opts}
      end

      def content_types_provided(req, state) do
        {[{"application/json", :handle_get}], req, state}
      end

      def content_types_accepted(req, state) do
        {[{"application/json", :handle_update}], req, state}
      end

      def allowed_methods(req, state) do
        {["GET", "OPTIONS", "PUT", "PATCH", "DELETE"], req, state}
      end

      def delete_resource(req, state) do
        handle_delete(req, state)
      end

      def options(req, state) do
        req =
          req
          |> set_headers(default_headers)
          |> set_header("Access-Control-Allow-Methods", "PUT,PATCH,DELETE")
        {:ok, req, state}
      end
    end
  end
end

defmodule TodoApp.Handler.Helpers do
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

  def reply(req, status_code, result \\ true, state \\ :no_state) do
    req = :cowboy_req.reply(status_code, req)
    {result, req, state}
  end

  def default_headers do
    %{
      "Access-Control-Allow-Origin" => "*",
      "Access-Control-Allow-Headers" => "Content-Type"
    }
  end
end
