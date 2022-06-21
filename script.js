window.addEventListener('DOMContentLoaded', () => {
  
  const input = document.querySelector('.text');
  const button = document.querySelector('.submit');
  button.addEventListener('click', () => {
    const value = input.value.trim();
    if (!value) return sweetalert('error', 'error', 'input masih kosong!');
    const text = message(value);
    sweetalert('success', 'berhasil', text);
    clear();
  });
  
  function sweetalert(icon, title, text) {
    return swal.fire ({
      icon: icon,
      title: title,
      text: text
    });
  }
  
  function clear() {
    input.value = '';
  }
  
  function message(value) {
    const lastIndex = value.length - 1;
    return `panjang karakter dari text yang anda tulis adalah ${value.length} dan index terakhir dari text yang anda tulis adalah ${lastIndex}. kenapa bisa begitu? karena index pertama selalu diawali dari angka 0`;
  }
  
});
