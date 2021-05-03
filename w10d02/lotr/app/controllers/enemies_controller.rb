class EnemiesController < ApplicationController
  before_action :set_enemy, only: %i[ show edit update destroy ]

  # GET /enemies or /enemies.json
  def index
    @enemies = Enemy.all
  end

  # GET /enemies/1 or /enemies/1.json
  def show
  end

  # GET /enemies/new
  def new
    @enemy = Enemy.new
  end

  # GET /enemies/1/edit
  def edit
  end

  # POST /enemies or /enemies.json
  def create
    @enemy = Enemy.new(enemy_params)

    respond_to do |format|
      if @enemy.save
        format.html { redirect_to @enemy, notice: "Enemy was successfully created." }
        format.json { render :show, status: :created, location: @enemy }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @enemy.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /enemies/1 or /enemies/1.json
  def update
    respond_to do |format|
      if @enemy.update(enemy_params)
        format.html { redirect_to @enemy, notice: "Enemy was successfully updated." }
        format.json { render :show, status: :ok, location: @enemy }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @enemy.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /enemies/1 or /enemies/1.json
  def destroy
    @enemy.destroy
    respond_to do |format|
      format.html { redirect_to enemies_url, notice: "Enemy was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_enemy
      @enemy = Enemy.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def enemy_params
      params.fetch(:enemy, {})
    end
end
