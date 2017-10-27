class CreateSignups < ActiveRecord::Migration[5.1]
  def change
    create_table :signups do |t|
      t.integer :event_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :signups, :event_id
    add_index :signups, :user_id
    add_index :signups, [:event_id, :user_id], unique: true
  end
end
