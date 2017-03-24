alias TodoApp.{Repo, Todo, Comment}

todos = Repo.all(Todo)

if length(todos) === 0 do
  for _ <- 1..10 do
    todo = %Todo{title: Faker.Name.name, completed: Enum.random([true, false])}
    todo = Repo.insert!(todo)
    comment = Ecto.build_assoc(todo, :comments)
    comment = %Comment{comment | text: Faker.Name.name}
    Repo.insert!(comment)
  end
end
