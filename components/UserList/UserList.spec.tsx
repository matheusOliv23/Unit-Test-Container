import { render, screen } from "@testing-library/react";
import UserList from "./UserList";

function renderComponent() {
  const users = [{ name: "matheus", email: "matheus@test.com" }];
  const { container } = render(<UserList users={users} />);

  return {
    users,
    container,
  };
}

test("should render one row per user", () => {
  const { container } = renderComponent();

  const rows = container.querySelectorAll("tbody tr");

  expect(rows).toHaveLength(1);
});

test("should render the email and name of each user", () => {
  const { users } = renderComponent();

  for (let user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
