class CreateOrganizations < ActiveRecord::Migration[5.1]
  def change
    create_table :organizations do |t|
      t.integer :manager_id

      t.timestamps
    end

    add_index :organizations, :manager_id
  end
end
