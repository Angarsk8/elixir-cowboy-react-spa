defmodule TodoApp.Todo do
  use TodoApp.BaseModel

  schema "todos" do
    field :title, :string
    field :completed, :boolean, default: false
    timestamps()
  end

  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:title, :completed])
    |> validate_required([:title])
  end

  def sorted_by_
end
