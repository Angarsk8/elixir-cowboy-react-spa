defmodule TodoApp.BaseHandler do
  defmacro __using__(_opts) do
    quote do
      alias TodoApp.Repo
      import Ecto
      import Ecto.Query
      import TodoApp.Handler.Helpers

      # Default REST Callbacks

      def init(req, state) do
        {:cowboy_rest, req, state}
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

      def handle(%{method: method} = req, state) do
        req = set_headers(req, default_headers())

        {decoded_body, req} = read_and_decode_body(req)
        bindings = :cowboy_req.bindings(req)
        params = Map.put(bindings, :body, decoded_body)

        handler = handler_for(method)
        apply(__MODULE__, handler, [req, state, params])
      end

      def options(req, state, _params) do
        req = set_header(req, "Access-Control-Allow-Methods", "PUT,PATCH,DELETE")
        {:ok, req, state}
      end

      def delete(req, state, _params) do
        {false, req, state}
      end

      # Private Functions

      defp handler_for("OPTIONS"), do: :options
      defp handler_for("GET"),     do: :index
      defp handler_for("POST"),    do: :create
      defp handler_for("PUT"),     do: :update
      defp handler_for("PATCH"),   do: :update
      defp handler_for("DELETE"),  do: :delete

      defp default_headers do
        %{"Access-Control-Allow-Origin" => "*",
          "Access-Control-Allow-Headers" => "Content-Type,Authorization"}
      end

      # Overridable Functions

      defoverridable [delete: 3]
    end
  end
end
