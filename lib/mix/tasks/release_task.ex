defmodule Mix.Tasks.TodoApp.Release do
  use Mix.Task

  @start_apps [:postgrex, :ecto]

  @app :todo_app

  @repo TodoApp.Repo

  def run(_), do: seed()

  def seed do
    IO.puts "Loading todo_app.."
    :ok = Application.load(@app)

    IO.puts "Starting dependencies.."
    Enum.each(@start_apps, &Application.ensure_all_started/1)

    # Start the Repo(s) for todo_app
    IO.puts "Starting repo.."
    @repo.start_link(pool_size: 2)

    # Run migrations
    run_migrations()

    # Run the seed script if it exists
    seed_script = seed_path()
    if File.exists?(seed_script) do
      IO.puts "Running seed script.."
      Code.eval_file(seed_script)
    end

    # Signal shutdown
    IO.puts "Success!"
    :init.stop()
  end

  def priv_dir, do: "#{:code.priv_dir(@app)}"

  defp run_migrations do
    IO.puts "Running migrations for #{@app}"
    Ecto.Migrator.run(@repo, migrations_path(), :up, all: true)
  end

  defp migrations_path, do: Path.join([priv_dir(), "repo", "migrations"])
  defp seed_path, do: Path.join([priv_dir(), "repo", "seeds.exs"])
end