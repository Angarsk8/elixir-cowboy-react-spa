defmodule TodoApp.Handler.Helpers do
  def method!(req) do
    {method, _} = :cowboy_req.method(req)
    method
  end

  def set_body(req, body) do
    body = Poison.encode!(body)
    :cowboy_req.set_resp_body(body, req)
  end

  def set_header(req, key, value) do
    :cowboy_req.set_resp_header(key, value, req)
  end

  def set_headers(req, headers \\ %{}) do
    Enum.reduce(headers, req, fn {k, v}, acc ->
      set_header(acc, k, v)
    end)
  end

  def reply(req, status_code, result \\ :ok) do
    req = :cowboy_req.reply(status_code, req)
    {result, req}
  end
end
