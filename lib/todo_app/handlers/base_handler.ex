defmodule TodoApp.BaseHandler do
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
        {[{"application/json", :handle}], req, state}
      end

      def content_types_accepted(req, state) do
        {[{"application/json", :handle}], req, state}
      end

      def options(req, state) do
        handle(req, state)
      end

      def delete_resource(req, state) do
        handle(req, state)
      end

      # Default REST Handlers

      def handle(req, state) do
        req = set_headers(req, default_headers())
        handler = handler_for(method!(req))
        apply(__MODULE__, handler, [req, state])
      end

      def handle_option(req, state) do
        req = set_header(req, "Access-Control-Allow-Methods", "PUT,PATCH,DELETE")
        {:ok, req, state}
      end

      def handle_delete(req, state) do
        {false, req, state}
      end

      # Private Functions

      defp handler_for("OPTION"), do: :handle_option
      defp handler_for("GET"),    do: :handle_get
      defp handler_for("POST"),   do: :handle_post
      defp handler_for("PUT"),    do: :handle_update
      defp handler_for("PATCH"),  do: :handle_update
      defp handler_for("DELETE"), do: :handle_delete

      defp default_headers do
        %{"Access-Control-Allow-Origin" => "*",
          "Access-Control-Allow-Headers" => "Content-Type,Authorization"}
      end

      # Overridable Functions

      defoverridable [handle_delete: 2]
    end
  end
end
