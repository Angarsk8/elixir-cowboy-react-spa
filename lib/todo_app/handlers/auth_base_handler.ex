defmodule TodoApp.Authorization.BaseHandler do
  defmacro __using__(_opts) do
    quote do
      import TodoApp.Authorization.Helpers

      # Default Authorization Handler

      def is_authorized(req, state) do
        case :cowboy_req.parse_header("authorization", req) do
          {:bearer, token} ->
            validate_and_get_resource(token, req, state)
          _ ->
            unauthorized_reply(req, state)
        end
      end
    end
  end
end
