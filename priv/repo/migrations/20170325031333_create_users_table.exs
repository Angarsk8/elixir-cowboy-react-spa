defmodule TodoApp.Repo.Migrations.CreateUsersTable do
  use Ecto.Migration

  def change do
    create table(:users) do
      timestamps()
    end

    alter table(:todos) do
      add :user_id, references(:users, on_delete: :nothing)
    end
    create index(:todos, [:user_id])

    alter table(:comments) do
      add :user_id, references(:users, on_delete: :nothing)
    end
    create index(:comments, [:user_id])
  end
end
