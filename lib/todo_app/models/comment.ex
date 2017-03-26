defmodule TodoApp.Comment do
  use TodoApp.BaseModel

  schema "comments" do
    field :text, :string
    belongs_to :todo, TodoApp.Todo
    belongs_to :user, TodoApp.User

    timestamps()
  end

  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:text])
    |> validate_required([:text])
  end
end
