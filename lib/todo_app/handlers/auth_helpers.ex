defmodule TodoApp.Authorization.Helpers do
  alias TodoApp.GuardianSerializer

  def encode_and_sign(resource) do
    { :ok, token, _encoded_claims } = Guardian.encode_and_sign(resource, :access)
    token
  end

  def validate_and_get_resource(token, req, state) do
    case get_current_resource(token) do
      {:ok, resource} ->
        authorized_reply(req, resource)
      :error ->
        unauthorized_reply(req, state)
    end
  end

  def get_current_resource(token) do
    case Guardian.decode_and_verify(token) do
      {:ok, claims} ->
        get_resource_from_claims(claims)
      {:error, _reason} ->
        :error
    end
  end

  def get_resource_from_claims(claims) do
    case GuardianSerializer.from_token(claims["sub"]) do
      result = {:ok, _} ->
        result
      {:error, _reason} ->
        :error
    end
  end

  def authorized_reply(req, state) do
    {true, req, state}
  end

  def unauthorized_reply(req, state) do
    {{false, "Bearer realm=\"cowboy\""}, req, state}
  end
end
