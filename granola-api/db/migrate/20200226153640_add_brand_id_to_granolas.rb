class AddBrandIdToGranolas < ActiveRecord::Migration[6.0]
  def change
    add_column :granolas, :brand_id, :string
  end
end
