defmodule TodoApp.Todo do
  use TodoApp.BaseModel

  schema "todos" do
    field :title, :string
    field :completed, :boolean, default: false
    timestamps()
  end

  @fields [:title]

  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, @fields)
    |> validate_required(@fields)
  end
end
