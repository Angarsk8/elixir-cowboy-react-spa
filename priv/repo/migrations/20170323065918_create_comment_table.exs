defmodule TodoApp.Repo.Migrations.CreateCommentTable do
  use Ecto.Migration

  def change do
    create table(:comments) do
      add :text, :string
      add :todo_id, references(:todos, on_delete: :nothing)

      timestamps()
    end

    create index(:comments, [:todo_id])
  end
end
