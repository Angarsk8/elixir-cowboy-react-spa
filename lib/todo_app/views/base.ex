defmodule TodoApp.BaseView do
  defmacro __using__(_opts) do
    quote do
      import unquote(__MODULE__)

      def render(template, assigns) when is_list(assigns) do
        render(template, Enum.into(assigns, %{}))
      end
    end
  end

  def render_detail({message, values}) do
    Enum.reduce(values, message, fn {k, v}, acc ->
      String.replace(acc, "%{#{k}}", to_string(v))
    end)
  end
  def render_detail(message) do
    message
  end
end
