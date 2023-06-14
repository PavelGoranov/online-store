import ClothesFilter from "./ClothesFilter";

// Тук ще се добави филтър за мъжки и женски дрехи
function Sidebar() {
  return (
    <div class="box sidebar">
      {/* Добавяме бутон (падащо меню) за филтриране на мъжки и женски дрехи*/}
      <ClothesFilter />
    </div>
  );
}

export default Sidebar;
