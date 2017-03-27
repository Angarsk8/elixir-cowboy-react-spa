defmodule TodoApp.Entity.BaseHandler do
  defmacro __using__(_opts) do
    quote do
      alias TodoApp.Repo
      import Ecto
      import Ecto.Query
      import TodoApp.Handler.Helpers

      # Default REST Callbacks

      def init({:tcp, :http}, req, _opts) do
        {:upgrade, :protocol, :cowboy_rest}
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

      def handle_delete(req, state) do
        {false, req, state}
      end

      def options(req, state) do
        req =
          req
          |> set_headers(default_headers)
          |> set_header("Access-Control-Allow-Methods", "PUT,PATCH,DELETE")
        {:ok, req, state}
      end

      defoverridable [allowed_methods: 2, handle_delete: 2]
    end
  end
end
