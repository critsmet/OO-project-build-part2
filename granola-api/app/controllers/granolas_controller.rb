class GranolasController < ApplicationController
  def index
    granolas = Granola.all
    render json: GranolaSerializer.new(granolas)
  end

  def show
    granola = Granola.find_by(params[:id])
    render json: GranolaSerializer.new(granola)
  end

  def create
    newGranola = Granola.create(name: params['name'], description: params['description'], brand_id: params['brandId'])
    render json: GranolaSerializer.new(newGranola)
  end

  def destroy
    granola = Granola.find_by(id: params[:id])
    granola.destroy
  end

end
