defmodule TodoApp.Authorization.BaseHandler do
  defmacro __using__(_opts) do
    quote do
      import TodoApp.Authorization.Helpers

      def is_authorized(req, state) do
        method = :cowboy_req.method(req)
        case method do
          "OPTIONS" ->
            authorized_reply(req, state)
          _ ->
            handle_authorization(req, state)
        end
      end

      def handle_authorization(req, state) do
        case :cowboy_req.parse_header("authorization", req) do
          {:bearer, token} ->
            validate_and_get_resource(token, req, state)
          _ ->
            unauthorized_reply(req, state)
        end
      end

      defoverridable [is_authorized: 2, handle_authorization: 2]
    end
  end
end
