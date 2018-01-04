class CreateVolunteers < ActiveRecord::Migration[5.1]
  def change
    create_table :volunteers do |t|
      t.integer :event_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :volunteers, :event_id
    add_index :volunteers, :user_id
    add_index :volunteers, [:event_id, :user_id], unique: true
  end
end
