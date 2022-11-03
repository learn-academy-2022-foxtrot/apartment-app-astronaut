class ApartmentsController < ApplicationController
  def index
    apartments = Apartment.all
    render json: apartments
  end

  # def create
  #   apartment = Apartment.create(apartment_params)
  #   if apartment.valid?
  #     render json: apartment
  #   else
  #     render json: apartment.errors, status: 422
  #   end
  # end

  # def destroy
  #   apartment = Apartment.find(params[:id])
  #   if apartment.destroy
  #     render json: apartments
  #   else
  #     render json: apartment.errors, status: 422
  #   end
  # end

  # private
  # def apartment_params
  #   params.require(:apartment).permit(:street, :city, :state, :manager, :email, :price, :bedrooms, :bathrooms, :pets, :user_id)
  # end
end
