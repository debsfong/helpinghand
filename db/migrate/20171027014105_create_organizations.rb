class CreateOrganizations < ActiveRecord::Migration[5.1]
  def change
    create_table :organizations do |t|
      t.string :title, null: false
      t.integer :manager_id, null: false

      t.timestamps
    end

    add_index :organizations, :manager_id
    add_index :organizations, :title
  end
end
