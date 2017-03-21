defmodule TodoApp.Repo.Migrations.CreateTodoTable do
  use Ecto.Migration

  def change do
    create table(:todos) do
      add :title, :string
      add :completed, :boolean

      timestamps()
    end
  end
end
