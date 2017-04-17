defmodule TodoApp.Repo do
  use Ecto.Repo, otp_app: :todo_app

  def init(_, opts) do
    opts =
      opts
      |> Enum.into(%{})
      |> build_repo_options
      |> Map.to_list

    {:ok, opts}
  end

  defp envs do
    [:username, :password, :database, :pool_size]
  end

  defp build_repo_options(opts) do
    set_envs(opts, envs())
  end

  defp set_envs(map, keys) do
    Enum.reduce(keys, map, & set_env(&2, &1))
  end

  defp set_env(map, key) do
    Map.put(map, key, get_env(key))
  end

  defp get_env(key) do
    Env.fetch!(:todo_app, __MODULE__)[key]
  end
end
