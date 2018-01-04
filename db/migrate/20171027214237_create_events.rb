class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.integer :org_id, null: false
      t.date :date
      t.integer :long
      t.integer :lat
      t.time :start_time
      t.time :end_time
      t.integer :volunteers_needed
    end

    add_index :events, :org_id
  end
end
