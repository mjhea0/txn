module.exports = function(sequelize, DataTypes) {
  var Merchant = sequelize.define('Merchant', {
    MerchantId: { type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    Name: { type: DataTypes.STRING,
      set: function(v) {
        return this.setDataValue('Name', v.toString() );
      }
    }
  }, {
    tableName: 'Merchants',
    timestamps: false,
    classMethods: {
      associate: function(models) {
        Merchant.hasMany(models.Transaction);
      }
    }
  });
  return Merchant;
};