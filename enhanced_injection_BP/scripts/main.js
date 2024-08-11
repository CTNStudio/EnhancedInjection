import { EquipmentSlot,ItemStack,world } from "@minecraft/server";
import { MinecraftEffectTypes } from "@minecraft/vanilla-data.js"

world.afterEvents.playerSpawn.subscribe((a) =>{
  var player = a.player
  if (a.initialSpawn==true) {
    player.sendMessage("%ai.message.betawarn")
  }
})

world.afterEvents.itemUse.subscribe((a)=>{
  var player = a.source
  var item = a.itemStack
  if(item.hasTag("ai:effective_injections")==true){
    player.playSound("minecraft:hit.amethyst_block")
    player.getComponent("minecraft:equippable").setEquipment(EquipmentSlot.Mainhand,new ItemStack("ai:empty_injection",1))
  }
  if(item.typeId=="ai:desperate_injection"){
      player.addEffect(MinecraftEffectTypes.Strength,400,{amplifier:3})
      player.addEffect(MinecraftEffectTypes.Wither,300,{amplifier:1})
  }
  if(item.typeId=="ai:enhanced_injection"){
      player.addEffect(MinecraftEffectTypes.Strength,3600,{amplifier:2})
      player.addEffect(MinecraftEffectTypes.InstantDamage,20,{amplifier:2})
      player.addEffect(MinecraftEffectTypes.Speed,1200,{amplifier:1})
      player.addEffect(MinecraftEffectTypes.Resistance,200,{amplifier:2})
  }
  if(item.typeId=="ai:fire_resistance_injection"){
      player.addEffect(MinecraftEffectTypes.FireResistance,2400,{amplifier:0})
  }
  if(item.typeId=="ai:strength_injection"){
      player.addEffect(MinecraftEffectTypes.Strength,900,{amplifier:0})
  }
})

