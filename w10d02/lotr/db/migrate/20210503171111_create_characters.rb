class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :poem
      t.string :race

      t.references :location, index: true, foreign_key: true

      t.timestamps
    end
  end
end
