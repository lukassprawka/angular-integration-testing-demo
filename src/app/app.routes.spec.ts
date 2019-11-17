import { routes } from './app.routes';
import { UsersComponent } from './users/users.component';
import { TodosComponent } from './2-todos/todos.component';

describe('routes', () => {
  it('should contain a route for /users', () => {
    expect(routes).toContain({ path: 'users', component: UsersComponent });
  });

  it('should contain a route for /todos', () => {
    expect(routes).toContain({ path: 'todos', component: TodosComponent });
  });
})