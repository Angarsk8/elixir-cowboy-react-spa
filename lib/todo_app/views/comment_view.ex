defmodule TodoApp.CommentView do
  use TodoApp.BaseView

  def render(:index, %{comments: comments}) do
    %{
      data: Enum.map(comments, & render(:comment, %{comment: &1}))
    }
  end
  def render(:show, %{comment: comment}) do
    %{
      data: render(:comment, %{comment: comment})
    }
  end
  def render(:comment, %{comment: comment}) do
    %{
      id: comment.id,
      text: comment.text,
      updatedAt: comment.updated_at,
      todoId: comment.todo_id
    }
  end
end
