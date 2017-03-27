# alias TodoApp.{Repo, Todo, Comment}
#
# todos = Repo.all(Todo)
#
# if length(todos) === 0 do
#   for _ <- 1..10 do
#     todo = %Todo{title: Faker.Name.name, completed: Enum.random([true, false])}
#     todo = Repo.insert!(todo)
#     comment = Ecto.build_assoc(todo, :comments)
#     comment = %Comment{comment | text: Faker.Name.name}
#     Repo.insert!(comment)
#   end
# end

# alias TodoApp.{Repo, User, GuardianSerializer}
# user = Repo.insert!(%User{})
# { :ok, jwt, encoded_claims } = Guardian.encode_and_sign(user, :access)
# { :ok, claims } = Guardian.decode_and_verify(jwt)
# {:ok, user1 } = GuardianSerializer.from_token(claims["sub"])
