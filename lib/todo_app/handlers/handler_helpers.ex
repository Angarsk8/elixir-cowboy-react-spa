defmodule TodoApp.Handler.Helpers do
  def set_body(req, body) do
    body = Poison.encode!(body)
    :cowboy_req.set_resp_body(body, req)
  end

  def set_header(req, key, value) do
    :cowboy_req.set_resp_header(key, value, req)
  end

  def set_headers(req, headers \\ %{}) do
    # :cowboy_req.set_resp_headers(headers, req)
    Enum.reduce(headers, req, fn {k, v}, acc ->
      set_header(acc, k, v)
    end)
  end

  def reply(req, status_code, result \\ :ok, state \\ :no_state) do
    req = :cowboy_req.reply(status_code, req)
    {result, req, state}
  end

  def default_headers do
    %{"Access-Control-Allow-Origin" => "*",
      "Access-Control-Allow-Headers" => "Content-Type,Authorization"}
  end
end
