defmodule TodoApp.Comment do
  use TodoApp.BaseModel

  schema "comments" do
    field :text, :string
    belongs_to :todo, TodoApp.Todo
      
    timestamps()
  end

  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:text, :todo_id])
    |> validate_required([:text, :todo_id])
  end
end
