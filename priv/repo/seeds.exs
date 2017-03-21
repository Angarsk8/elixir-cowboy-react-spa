alias TodoApp.{Repo, Todo}

todos = Repo.all(Todo)

if length(todos) === 0 do
  for _ <- 1..10 do
    todo = %Todo{title: Faker.Name.name, completed: Enum.random([true, false])}
    Repo.insert(todo)
  end
end
