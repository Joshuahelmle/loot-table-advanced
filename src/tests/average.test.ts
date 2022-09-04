import { GetLootAverage, Loot, LootTable, LootTableEntry } from "../loot-tables-advanced"

test('Average test', async () => {
    const gems: LootTable = [
        LootTableEntry('pearl', 1, 5, 10, 1, 1),
        LootTableEntry('garnet', 1, 3, 12, 1, 1),
        LootTableEntry('ruby', 1, 4, 9, 1, 1),
        LootTableEntry('sapphire', 1, 1, 2, 1, 1),
        LootTableEntry('gold', 1, 0, 1, 1, 1),
      ]
    
      const treasure: LootTable = [
        LootTableEntry(null, 1, 1, 1, 1, 1),
        LootTableEntry('@gems', 1, 0, 2, 1, 1),
        LootTableEntry('gold', 1, 15, 20, 1, 2),
      ]
    
      function ResolveHelper(id: string): LootTable | undefined {
        switch (id) {
          case 'gems':
            return gems
          case 'treasure':
            return treasure
        }
        return
      }
    console.log(GetLootAverage(gems, 1,  ResolveHelper));
    console.log(GetLootAverage(treasure, 1,  ResolveHelper));
})