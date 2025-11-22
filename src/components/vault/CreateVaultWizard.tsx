import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { TokenMultiSelect } from "./TokenMultiSelect"
import { useAccount } from "wagmi"
import { useConnectModal } from "@rainbow-me/rainbowkit"

const VAULT_NAME_PREFIX = "ethGlobal - wave: "

const vaultSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  image: z.string().url().optional().or(z.literal("")),
  depositFee: z.number().min(0).max(5),
  withdrawFee: z.number().min(0).max(5),
  managementFee: z.number().min(0).max(2),
  whitelistedTokens: z.array(z.string()).min(1, "Select at least one token"),
})

type VaultFormData = z.infer<typeof vaultSchema>

const steps = [
  { id: 1, title: "Basic Info" },
  { id: 2, title: "Fees" },
  { id: 3, title: "Tokens" },
  { id: 4, title: "Review" },
]

export function CreateVaultWizard() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedTokens, setSelectedTokens] = useState<string[]>([])
  const { isConnected } = useAccount()
  const { openConnectModal } = useConnectModal()

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<VaultFormData>({
    resolver: zodResolver(vaultSchema),
    defaultValues: {
      name: "",
      description: "",
      image: "",
      depositFee: 0,
      withdrawFee: 0,
      managementFee: 0,
      whitelistedTokens: [],
    },
  })

  const watchedName = watch("name")
  const displayName = watchedName
    ? `${VAULT_NAME_PREFIX}${watchedName}`
    : VAULT_NAME_PREFIX

  const onSubmit = async (data: VaultFormData) => {
    // Check if wallet is connected
    if (!isConnected && openConnectModal) {
      openConnectModal()
      return
    }

    // Here you would integrate with SDK and deploy vault
    console.log("Vault data:", {
      ...data,
      name: `${VAULT_NAME_PREFIX}${data.name}`,
    })
    // TODO: Implement vault deployment logic
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  // Generate pairs from selected tokens
  const generatePairs = (tokens: string[]) => {
    const pairs: string[][] = []
    for (let i = 0; i < tokens.length; i++) {
      for (let j = i + 1; j < tokens.length; j++) {
        pairs.push([tokens[i], tokens[j]])
      }
    }
    return pairs
  }

  const pairs = generatePairs(selectedTokens)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-6">
      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Step {currentStep} of {steps.length}</span>
          <span>{Math.round((currentStep / steps.length) * 100)}%</span>
        </div>
        <Progress value={(currentStep / steps.length) * 100} />
      </div>

      {/* Step 1: Basic Info */}
      {currentStep === 1 && (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Vault Name *</Label>
            <div className="space-y-1">
              <div className="text-sm text-muted-foreground mb-1">
                {displayName}
              </div>
              <Input
                id="name"
                variant="glass"
                placeholder="Enter vault name"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-sm text-error">{errors.name.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
              <Textarea
              id="description"
              variant="glass"
              placeholder="Describe your vault..."
              {...register("description")}
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Image URL</Label>
            <Input
              id="image"
              variant="glass"
              type="url"
              placeholder="https://..."
              {...register("image")}
            />
          </div>
        </div>
      )}

      {/* Step 2: Fees */}
      {currentStep === 2 && (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="depositFee">Deposit Fee (%)</Label>
            <Input
              id="depositFee"
              variant="glass"
              type="number"
              step="0.1"
              min="0"
              max="5"
              {...register("depositFee", { valueAsNumber: true })}
            />
            {errors.depositFee && (
              <p className="text-sm text-error">{errors.depositFee.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="withdrawFee">Withdraw Fee (%)</Label>
            <Input
              id="withdrawFee"
              variant="glass"
              type="number"
              step="0.1"
              min="0"
              max="5"
              {...register("withdrawFee", { valueAsNumber: true })}
            />
            {errors.withdrawFee && (
              <p className="text-sm text-error">{errors.withdrawFee.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="managementFee">Management Fee (%)</Label>
            <Input
              id="managementFee"
              variant="glass"
              type="number"
              step="0.1"
              min="0"
              max="2"
              {...register("managementFee", { valueAsNumber: true })}
            />
            {errors.managementFee && (
              <p className="text-sm text-error">{errors.managementFee.message}</p>
            )}
          </div>
        </div>
      )}

      {/* Step 3: Tokens */}
      {currentStep === 3 && (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Whitelisted Tokens *</Label>
            <TokenMultiSelect
              selected={selectedTokens}
              onChange={(tokens) => {
                setSelectedTokens(tokens)
                setValue("whitelistedTokens", tokens)
              }}
            />
            {errors.whitelistedTokens && (
              <p className="text-sm text-error">
                {errors.whitelistedTokens.message}
              </p>
            )}
          </div>

          {selectedTokens.length > 0 && (
            <div className="space-y-2">
              <Label>Available Pairs</Label>
              <div className="flex flex-wrap gap-2 p-4 glass rounded-lg">
                {pairs.map((pair, idx) => (
                  <Badge key={idx} variant="secondary" className="glass">
                    {pair[0]} / {pair[1]}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Step 4: Review */}
      {currentStep === 4 && (
        <div className="space-y-4">
          <Card variant="glass" className="p-4">
            <div className="space-y-3">
              <div>
                <span className="text-sm text-muted-foreground">Name:</span>
                <p className="font-medium">{displayName}</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Description:</span>
                <p className="font-medium">{watch("description") || "N/A"}</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Fees:</span>
                <p className="font-medium">
                  Deposit: {watch("depositFee")}% | Withdraw: {watch("withdrawFee")}% | Management: {watch("managementFee")}%
                </p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Tokens:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {selectedTokens.map((token) => (
                    <Badge key={token} variant="secondary">
                      {token}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Pairs:</span>
                <p className="font-medium">{pairs.length} pairs available</p>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          type="button"
          variant="ghost"
          onClick={prevStep}
          disabled={currentStep === 1}
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Previous
        </Button>
        {currentStep < steps.length ? (
          <Button type="button" variant="glass-apple" onClick={nextStep}>
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        ) : (
          <Button type="submit" variant="glass-apple">
            Deploy Vault
          </Button>
        )}
      </div>
    </form>
  )
}

