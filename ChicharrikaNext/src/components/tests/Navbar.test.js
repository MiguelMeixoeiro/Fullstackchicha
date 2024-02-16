import { test } from 'vitest';
import { mount } from 'vitest-dom';
import WishList from '../../pages/WishList'; // Ajusta la ruta según la ubicación de tu componente

test('WishList muestra elementos correctamente', () => {
  // Datos de prueba
  const mockWishList = [
    { title: 'Producto 1', price: 50, url: 'producto1.jpg' },
    { title: 'Producto 2', price: 30, url: 'producto2.jpg' },
  ];

  // Montar el componente
  const container = mount(<WishList wishList={mockWishList} />);

  // Verificar que los elementos se muestren correctamente
  const items = container.querySelectorAll('.wish-container .wishlist-items li');

  // Asegurarse de que haya la misma cantidad de elementos que en la lista de deseos
  assert.equal(items.length, mockWishList.length);

  // Verificar que los títulos y precios coincidan
  mockWishList.forEach((item, index) => {
    const listItem = items[index];
    assert.equal(
      listItem.textContent.trim(),
      `${item.title} - ${item.price}€`
    );

    // Verificar la existencia de la imagen
    const img = listItem.querySelector('.wish-img img');
    assert(img, 'La imagen debe estar presente');
    assert.equal(img.getAttribute('src'), `/${item.url}`);
    assert.equal(img.getAttribute('alt'), item.title);
  });
});
