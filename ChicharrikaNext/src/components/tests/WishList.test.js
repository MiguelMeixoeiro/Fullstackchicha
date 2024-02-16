// WishList.test.jsx
import { render } from 'vitest';
import WishList from '../../pages/WishList';

// Ejemplo de un caso de prueba
it('renders Wish List component correctly', () => {
  // Renderiza el componente
  const { container } = render(<WishList />);

  // Asegúrate de que el título está presente
  const titleElement = container.querySelector('h2');
  expect(titleElement).not.toBeNull();
  expect(titleElement.textContent).toBe('Wish List');

  // Puedes agregar más aserciones según tus necesidades
});
