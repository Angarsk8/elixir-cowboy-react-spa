defmodule TodoApp.Mixfile do
  use Mix.Project

  def project do
    [app: :todo_app,
     version: "0.1.0",
     elixir: "~> 1.3",
     build_embedded: Mix.env == :prod,
     start_permanent: Mix.env == :prod,
     deps: deps()]
  end

  # Configuration for the OTP application
  #
  # Type "mix help compile.app" for more information
  def application do
    [ mod: {TodoApp, []},
      applications: [:logger, :ecto, :postgrex, :cowboy]]
  end

  # Dependencies can be Hex packages:
  #
  #   {:mydep, "~> 0.3.0"}
  #
  # Or git/path repositories:
  #
  #   {:mydep, git: "https://github.com/elixir-lang/mydep.git", tag: "0.1.0"}
  #
  # Type "mix help deps" for more examples and options
  defp deps do
    [
      {:ecto, "~> 2.1"},
      {:postgrex, "~> 0.13.2"},
      {:faker, "~> 0.7.0"},
      {:cowboy, github: "ninenines/cowboy", tag: "2.0.0-pre.7"},
      {:poison, "~> 3.0"}
    ]
  end
end
