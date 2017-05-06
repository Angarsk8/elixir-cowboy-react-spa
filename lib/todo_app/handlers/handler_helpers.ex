defmodule TodoApp.Handler.Helpers do
  def set_body(req, body) do
    body = Poison.encode!(body)
    :cowboy_req.set_resp_body(body, req)
  end

  def set_header(req, key, value) do
    :cowboy_req.set_resp_header(key, value, req)
  end

  def set_headers(req, headers \\ %{}) do
    :cowboy_req.set_resp_headers(headers, req)
  end

  def read_and_decode_body(req) do
    {:ok, body, req} = :cowboy_req.read_body(req)
    {decode_body(body), req}
  end

  defp decode_body(body) do
    case Poison.decode(body) do
      {:ok, decoded_value} ->
        decoded_value
      _ ->
        %{}
    end
  end

  def reply(req, status_code, result \\ :ok) do
    req = :cowboy_req.reply(status_code, req)
    {result, req}
  end
end
