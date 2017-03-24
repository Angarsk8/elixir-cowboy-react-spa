defmodule TodoApp.Todo do
  use TodoApp.BaseModel

  schema "todos" do
    field :title, :string
    field :completed, :boolean, default: false
    field :description, :string, default: ""
    has_many :comments, TodoApp.Comment, on_delete: :delete_all

    timestamps()
  end

  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:title, :completed, :description])
    |> validate_required([:title])
  end

  def preloaded() do
    from t in __MODULE__, preload: [:comments]
  end
end
