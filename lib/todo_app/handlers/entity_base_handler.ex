defmodule TodoApp.Entity.BaseHandler do
  defmacro __using__(_opts) do
    quote do
      use TodoApp.BaseHandler

      # Default REST Callbacks

      def allowed_methods(req, state) do
        {["GET", "OPTIONS", "PUT", "PATCH", "DELETE"], req, state}
      end

      # Overridable Functions

      defoverridable [allowed_methods: 2]
    end
  end
end
