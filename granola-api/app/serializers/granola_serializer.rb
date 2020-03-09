class GranolaSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description
  belongs_to :brand
end
